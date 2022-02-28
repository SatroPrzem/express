module.exports = {
  
  checkForbidenString(value, forbidenString) {
    if (value === forbidenString) {
      throw new Error('Nazwa "slug" jest zakazana'); 
    }
  }

};
