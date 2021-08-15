'use strict';
const supertest=require('supertest');
const server=require('../server.js');
const request=supertest(server.app);
describe('express server',()=>{
    it('should check all good works fine',async()=>{
         // arrange
         let param = '/';
         let status = 200;
         let text = 'all good';
         // act
         const response = await request.get(param);
         // assert
         expect(response.status).toBe(status);
         expect(response.text).toBe(text);
    });
    it('should check data is work fine',async()=>{
        // arrange
        let param = '/data';
        let status = 200;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });
    it('should check Not Found Error',async()=>{
          // arrange
          let param = '/notfound';
          let status = 404;
          // act
          const response = await request.get(param);
          // assert
          expect(response.status).toBe(status);
    })
    it('shoud check Internal Server Error',async()=>{
        // arrange
        let param = '/wrong';
        let status = 500;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param);
    })
})
