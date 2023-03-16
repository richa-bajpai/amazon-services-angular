export interface signup{
    name:string,
    password:string,
    email:string,
    id:string
}
export interface login{
    email:string,
    password:string,
}
export interface product{
    productname:string,
    producttype:string,
    id:number,
    productdescription:string,
    productimage:string,
    quantity:undefined|number,
    productid:undefined|number


}
export interface cart{
    productname:string,
    producttype:string,
    id:undefined|number,
    productdescription:string,
    productimage:string,
    quantity:undefined|number,
    userId:string,
    productid:number

}
export interface pro{
    productname:string,
    producttype:string,
    id:string,
    productdescription:string,
    productimage:string,
    
}