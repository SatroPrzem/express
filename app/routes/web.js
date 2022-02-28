const express = require('express');
const router = new express.Router();
const CompanyController = require('../controllers/company-controller');
const PageController = require('../controllers/page-controller');


router.get('/', PageController.showHome);
router.get('/firmy', CompanyController.showCompanies);
router.get('/firmy/dodaj', CompanyController.showCreateCompanyForm);
router.post('/firmy/dodaj', CompanyController.createCompany);
router.get('/firmy/edytuj/:name', CompanyController.showEditCompanyForm);
router.post('/firmy/edytuj/:name', CompanyController.editCompany);
router.get('/firmy/usun/:name', CompanyController.deleteCompany);
router.get('/firmy/:name', CompanyController.showCompany);
router.get('*', PageController.showNotFound);

module.exports = router;