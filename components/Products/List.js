import React, { useState } from 'react';
import { Modal, Form, Input, Button, Radio, Checkbox,Menu, Dropdown, } from 'antd';
const { TextArea } = Input;
import VideoChatModal from './VideoChatModal';
import EmailSellerModal from './EmailSellerModal';
const List = () => {
   
   function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Apple
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Android
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
             Other
            </a>
          </Menu.Item>
        </Menu>
      );
      const timemenu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              8am-12pm
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              12pm-3pm
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              3pm-6pm
            </a>
          </Menu.Item>
         
        </Menu>
      );
      const daymenu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Monday-Februry 22
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
            Tuesday-Februry 23
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
            Wednessday-Februry 24
            </a>
          </Menu.Item>
         
        </Menu>
      );
    return (
      <div className="listing-content">    
        <div className="views-row">
           <div className="invent-pro-cus">
             <div className="invent-pro-cus-lft">
                <div className="invent-cus-img">  
                    <img src="/images/listing.jpg"  width="1064" height="768" alt="" loading="lazy" typeof="Image"/>
                </div>
                <div className="invent-cus-created">updated: Mon, 02/15/2021 - 15:53</div>
                <div className="invent-cus-body"><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p></div>
             </div>
           
           <div className="invent-pro-cus-mid">
                <div className="invent-cus-title">Skid Steers 2</div>
                <div className="invent-cus-des">Lorem ipsum dolor sit </div>
                <div className="invent-cus-price"><span>Price:</span> </div>
                {/* <div className="invent-cus-purchas-cus"><span><svg className="svg-inline--fa fa-money-bill-alt fa-w-20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M352 288h-16v-88c0-4.42-3.58-8-8-8h-13.58c-4.74 0-9.37 1.4-13.31 4.03l-15.33 10.22a7.994 7.994 0 0 0-2.22 11.09l8.88 13.31a7.994 7.994 0 0 0 11.09 2.22l.47-.31V288h-16c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h64c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 192c-53.02 0-96-50.15-96-112 0-61.86 42.98-112 96-112s96 50.14 96 112c0 61.87-43 112-96 112zm272 32h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"></path></svg><!-- <i className="fas fa-money-bill-alt"></i> --></span><a href="#"> </a></div> */}
                <div className="invent-cus-machloc"><span>Machine Location:</span> Lorem ipsum dolor sit  dir</div>
                <div className="invent-cus-rhrs"><span>Hours:</span> 235 </div>
                <div className="invent-cus-snum"><span>Serial Numbers:</span> 7238682et8723 </div>
                <div className="invent-cus-cond"><span>Condition:</span> Used </div>
                <div className="invent-cus-stnum"><span>Stock Number:</span> 7238e6dhweud </div>
                <div className="invent-cus-bucket"><span>Bucket:</span> Yes </div>
                <div className="invent-cus-ac"><span>A/C:</span> Yes</div>
                <div className="invent-cus-heater"><span>Heater:</span> Yes</div>
                <div className="invent-cus-rnum-fend"><span>Number of Fanders:</span> -1</div>
                <div className="invent-cus-buc-cap"><span>Bucket Capacity</span> 2.4</div>
            </div>
            <div className="invent-pro-cus-rt">
              <div className="manf-detail">
                <div className="lister-dealer-info">
                    <p><a href="#">Lorem Ipsum has</a></p>
                    <p>Lorem Ipsum has has t</p>
                    <p><span>Phone:</span> 7483804</p>
                </div>
                <div className="products-info-btns">
                    <a href="/inventory/listing/skid-steers-2" >View Details</a>
                   <EmailSellerModal/>
                    <VideoChatModal/>
                </div>
              </div>
            </div>
        </div> 
        </div>   
       
      </div>
    );
  };
  
  export default List;