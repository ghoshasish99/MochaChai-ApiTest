var should = require('should');
var request = require('request');
var expect = require('chai').expect;
//var util = require('util');
var id
describe ('validate get request',() =>{
    it('post request', ()=>{
        request({url : 'http://dummy.restapiexample.com/api/v1/create', method :"POST",body: {"name":"mocha14311","salary":"123","age":"23"},json: true}, (error,response)=>{
              (response.statusCode).should.equal(200)
              id=response.body.id;
            //  console.log(id)
        })
          
    })
    it('get req', ()=>{
        request({url:`http://dummy.restapiexample.com/api/v1/employee/${id}`,method :"GET",json:true}, (error,response)=>{
            (response.statusCode).should.equal(200)
            
        })
    })
    it('delete req', ()=>{
        request({url:`http://dummy.restapiexample.com/api/v1/delete/${id}`,method :"DELETE",json:true}, (error,response)=>{
            (response.statusCode).should.equal(200)
            console.log(response.body)
        })
    })
    
})
