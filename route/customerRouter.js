const express = require("express");

const router = express.Router(); 

const customerController = require("../controllers/customerController")


router.route('/').get(customerController.getCustomersData).post(customerController.getCustomersDataById);

router.route('/:id')
.get(customerController.getCustomersDataById)
.patch(customerController.updateCustomers)
.delete(customerController.deletedata);
module.exports = router;