const {Product} = require('../models/product');
const express = require('express');
const { Category } = require('../models/category');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if(isValid) {
            uploadError = null
        }
      cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        
      const fileName = file.originalname.split(' ').join('-');
      const extension = FILE_TYPE_MAP[file.mimetype];
      cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
  })
  
const uploadOptions = multer({ storage: storage })

router.get('/getAll', async (req, res) => {
    let filter = {};

    if (req.query.categories) {
        filter.category = { $in: req.query.categories.split(',') };
    }

    if (req.query.type) {
        filter.type = req.query.type;
    }

    if (req.query.brand) {
        filter.brand = req.query.brand;
    }

    const limit = parseInt(req.query.limit) || 6; // Default limit is 6
    const page = parseInt(req.query.page) || 1; // Default page is 1
    const skip = (page - 1) * limit;

    try {
        const productList = await Product.find(filter)
            .populate('category')
            .skip(skip)
            .limit(limit);

        if (!productList) {
            return res.status(500).json({ success: false });
        }

        res.send(productList);
    } catch (error) {
        console.error('Error fetching product list:', error);
        res.status(500).json({ success: false, error: 'Error fetching product list' });
    }
});

router.get('/getPromotion', async (req, res) => {
    let filter = {};
    if (req.query.categories) {
        filter.category = { $in: req.query.categories.split(',') };
    }
    const limit = parseInt(req.query.limit) || 6;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    try {
        const productList = await Product.find(filter)
            .populate('category')
            .sort({ discount: -1 }) // Sắp xếp theo discount giảm dần
            .skip(skip)
            .limit(limit);

        if (!productList) {
            return res.status(500).json({ success: false });
        }

        res.send(productList);
    } catch (error) {
        console.error('Error fetching product list:', error);
        res.status(500).json({ success: false, error: 'Error fetching product list' });
    }
});

router.get('/getProductByCategory', async (req, res) => {
    const categoryName = req.query.category;

    if (!categoryName) {
        return res.status(400).json({ success: false, message: 'Category name is required' });
    }

    let limit = parseInt(req.query.limit) || 5; // Giới hạn sản phẩm mặc định là 6 nếu không có tham số limit

    try {
        const category = await Category.findOne({ name: categoryName });

        if (!category) {
            return res.status(400).json({ success: false, message: 'Category not found' });
        }

        const products = await Product.find({ category: category._id })
                                      .limit(limit) // Áp dụng giới hạn số lượng sản phẩm
                                      .populate('category');

        if (!products.length) {
            return res.status(404).json({ success: false, message: 'No products found for this category' });
        }

        res.json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ success: false, message: 'Error fetching products by category', error });
    }
});

router.get('/getSortedProductsByCategory', async (req, res) => {
    const categoryName = req.query.category;
    const sortOption = req.query.sort; // Tham số sort để xác định cách sắp xếp

    if (!categoryName) {
        return res.status(400).json({ success: false, message: 'Category name is required' });
    }

    let limit = parseInt(req.query.limit) || 5;


    const sortCriteria = {
        'price-asc': { price: 1 },       
        'price-desc': { price: -1 },    
        'discount-desc': { discount: -1 } 
    };

    const sort = sortCriteria[sortOption] || {}; // Lấy tùy chọn sắp xếp hoặc để trống nếu không có

    try {
        const category = await Category.findOne({ name: categoryName });

        if (!category) {
            return res.status(400).json({ success: false, message: 'Category not found' });
        }

        const products = await Product.find({ category: category._id })
                                      .limit(limit)
                                      .sort(sort)
                                      .populate('category');

        if (!products.length) {
            return res.status(404).json({ success: false, message: 'No products found for this category' });
        }

        res.json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ success: false, message: 'Error fetching products by category', error });
    }
});


router.get(`/getProductById:id`, async (req, res) =>{
    const product = await Product.findById(req.params.id).populate('category');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
})

router.post('/create', async (req, res) => {
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send('Invalid Category');

    // Use image link provided in the request
    const imageLink = req.body.image;
    if (!imageLink) return res.status(400).send('No image link in the request');

    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: imageLink,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    });

    product = await product.save();

    if (!product) return res.status(500).send('The product cannot be created');

    res.send(product);
});


router.put('/update/:id',async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
       return res.status(400).send('Invalid Product Id')
    }
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')
    const imagesArray = req.body.images;
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
            images: imagesArray
        },
        { new: true}
    )

    if(!product)
    return res.status(500).send('the product cannot be updated!')

    res.send(product);
})

router.delete('/delete/:id', (req, res)=>{
    Product.findByIdAndDelete(req.params.id).then(product =>{
        if(product) {
            return res.status(200).json({success: true, message: 'the product is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "product not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

router.get('/get/count', async (req, res) => {
    const categoryNameOrId = req.query.category;
    const brandId = req.query.brand; // Thêm dòng này để lấy brandId từ query params
  
    try {
      let productCount;
  
      if (categoryNameOrId) {
        let categoryId;
        // Kiểm tra xem categoryNameOrId có phải là ObjectId hợp lệ hay không
        if (mongoose.Types.ObjectId.isValid(categoryNameOrId)) {
          categoryId = categoryNameOrId;
        } else {
          // Nếu không phải, tìm ID của category theo tên
          const category = await Category.findOne({ name: categoryNameOrId });
          if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
          }
          categoryId = category._id;
        }
  
        // Đếm số lượng sản phẩm theo categoryId và brandId (nếu có)
        if (brandId) {
          productCount = await Product.countDocuments({ category: categoryId, brand: brandId });
        } else {
          productCount = await Product.countDocuments({ category: categoryId });
        }
      } else {
        // Đếm tất cả sản phẩm
        productCount = await Product.countDocuments();
      }
  
      res.send(String(productCount));
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  });
  

router.get(`/get/featured/:count`, async (req, res) =>{
    const count = req.params.count ? req.params.count : 0
    const products = await Product.find({isFeatured: true}).limit(+count);

    if(!products) {
        res.status(500).json({success: false})
    } 
    res.send(products);
})

router.put(
    '/gallery-images/:id', 
    uploadOptions.array('images', 10), 
    async (req, res)=> {
        if(!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).send('Invalid Product Id')
         }
         const files = req.files
         let imagesPaths = [];
         const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

         if(files) {
            files.map(file =>{
                imagesPaths.push(`${basePath}${file.filename}`);
            })
         }

         const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                images: imagesPaths
            },
            { new: true}
        )

        if(!product)
            return res.status(500).send('the gallery cannot be updated!')

        res.send(product);
    }
)

router.get('/filterBrand', async (req, res) => {
    try {
      const { categoryName, brand } = req.query;
  
      if (!categoryName) {
        return res.status(400).json({ success: false, message: 'Category name is required' });
      }
  
      // Tìm category theo tên
      const category = await Category.findOne({ name: categoryName });
  
      if (!category) {
        return res.status(404).json({ success: false, message: 'Category not found' });
      }
  
      let filter = { category: category._id };
  
      if (brand) {
        filter.brand = brand;
      }
  
      const products = await Product.find(filter);
  
      if (!products) {
        return res.status(404).json({ success: false, message: 'No products found' });
      }
  
      res.json(products);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  router.get('/filterByPrice', async (req, res) => {
    try {
      const { priceRange, categoryName } = req.query;
  
      let filter = {};
  
      if (categoryName) {
        // Tìm ID của category dựa trên tên
        const category = await Category.findOne({ name: categoryName });
        if (!category) {
          return res.status(404).json({ success: false, message: 'Category not found' });
        }
        filter.category = category._id;
      }
  
      if (priceRange) {
        switch (priceRange) {
          case 'below4':
            filter.price = { $lt: 4000000 };
            break;
          case 'from4to7':
            filter.price = { $gte: 4000000, $lte: 7000000 };
            break;
          case 'from7to13':
            filter.price = { $gte: 7000000, $lte: 13000000 };
            break;
          case 'from13to25':
            filter.price = { $gte: 13000000, $lte: 25000000 };
            break;
          case 'above25':
            filter.price = { $gt: 25000000 };
            break;
          default:
            return res.status(400).json({ success: false, message: 'Invalid price range' });
        }
      }
  
      const products = await Product.find(filter);
      const count = await Product.countDocuments(filter);
      if (!products) {
        return res.status(404).json({ success: false, message: 'No products found' });
      }
  
      res.json({ count, products });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
module.exports =router;