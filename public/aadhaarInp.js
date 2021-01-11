class AadhaarInputSingleTon{
    constructor(){
        this.aadhaarNo = "";
    }
  
    getAadhaarNo = () => {
        return this.aadhaarNo;
    }

    setAadhaarNo = (aadhaarNo) => {
        this.aadhaarNo = aadhaarNo;
    }
  }
  
  const AadhaarInput = new AadhaarInputSingleTon();
  
  export default AadhaarInput;