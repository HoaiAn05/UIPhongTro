const address = document.querySelector('#address-form')
const addressclose= document.querySelector('#address-close')
address.addEventListener("click",function(){
    document.querySelector('.address').style.display ="flex"
})
addressclose.addEventListener("click",function(){
    document.querySelector('.address').style.display="none"
})
//---------------------------------adver--------------- //
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber=document.querySelectorAll('.slider-content-left-top img')
let index=0;
rightbtn.addEventListener("click",function(){
    index = index + 1
    if(index>imgNumber.length-1){
        index=0;
    }
    document.querySelector(".slider-content-left-top").style.right = index *100 + "%"
})
leftbtn.addEventListener("click",function(){
    index = index - 1
    if(index<=0){
        index=imgNumber.length-1;
    }
    document.querySelector(".slider-content-left-top").style.right = index *100 + "%"
})
//slider 1-------------------------//
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive ()
        document.querySelector('.slider-content-left-top').style.right = index *100 + "%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// -----------------slider 2-------------------------//
function imgAuto () {
    index = index + 1
    if(index>imgNumber.length-1){
        index=0;
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index *100 + "%"
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto,6000)
//slider product-------------------------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNumbertwo=document.querySelectorAll('.slider-product-one-content-items')
rightbtntwo.addEventListener("click",function(){
    index = index + 1
    if(index>imgNumbertwo.length-1){
        index=0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100 + "%"
})
leftbtntwo.addEventListener("click",function(){
    index = index - 1
    if(index<=0){
        index=imgNumbertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100 + "%"
})
// --------------------------------------------Validator-------------------------
// Đối tượng Validator
// function Validator (options) {
//     function getParent(element, selector) {
//         while (element.parentElement) {
//             if (element.parentElement.mathches(selector)) {
//                 return element.parentElement;
//             }
//             element = element.parentElement;
//         }
//     }

//     var selectorRules = {};

//     //Hàm thực hiện Validate
//     function validate(inputElement, rule) {
//         var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
//         var errorMessage;
        
//         // Lấy ra các rules của selector
//         var rules = selectorRules[rule.selector];

//         // Lặp qua từng rule $ kiểm tra
//         // Nếu có lỗi thì dừng lại việc kiểm
//         for (var i=0; i < rules.length; ++i) {
//             errorMessage = rules[i](inputElement.value);
//             if (errorMessage) break;
//         }

//         if(errorMessage) {
//             errorElement.innerText = errorMessage;
//             getParent(inputElement, options.formGroupSelector).classList.add('invalid')
//         }
//         else {
//             errorElement.innerText = '';
//             getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
//         }
//         return !errorMessage;
//     }

//     //Lấy element của form cần validate  
//     var formElement = document.querySelector(options.form);
//     if (formElement) {
//         // Khi submit form
//         formElement.onsubmit = function (e) {
//             e.preventDefault();

//             var isFormValid = true;

//             // Lặp qua từng rules và validate
//             options.rules.forEach(function (rule) {
//                 var inputElement = formElement.querySelector(rule.selector);
//                 var isValid =  validate(inputElement, rule);
//                 if (!isValid) {
//                  isFormValid = false;
//                 }
//             });

//             if  (isFormValid) {
//                 // Trường hợp submit với javascript
//                 if (typeof options.onSubmit === 'function') {
//                     var enableInputs = formElement.querySelectorAll('[name]');
//                     var formValues = Array.from(enableInputs).reduce(function (values, input) {
//                         values[input.name] = input.value;
//                         return values;
//                     }, {});
//                     options.onSubmit(formValues);
//                 }
//                 // Trường hợp submit với hành vi mặc định
//                 else {
//                     formElement.submit()
//                 }
//             }
//         }

//         // Lặp qua mỗi rule và xử lý ( lắng nghe sự kiện blur, input, ....)
//         options.rules.forEach(function (rule) {

//             //Lưu lại các rules cho mỗi input
//             if (Array.isArray(selectorRules[rule.selector])) {
//                 selectorRules[rule.selector].push(rule.test);
//             } else {
//                 selectorRules[rule.selector] = [rule.test];
//             }

//             var inputElement = formElement.querySelector(rule.selector);

//             if(inputElement) {
//                 //Xử lý trường hợp blur khỏi input
//                 inputElement.onblur = function () {
//                     validate(inputElement, rule);            
//             }

//             //xử lý khi người dùng nhập vào input
//             inputElement.oninput = function () {
//                 var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
//                 errorElement.innerText = '' 
//                 getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
//                 }
//             }
//         });
//     }
// }
// Validator.isRequired = function (selector, message) {
//     return {
//         selector: selector,
//         test: function (value) {
//             return value.trim() ? undefined: message ||'Vui lòng nhập trường này'

//         }
//     };
// }

// Validator.isEmail = function (selector, message) {
//     return {
//         selector: selector,
//         test: function (value) {
//             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             return regex.test(value) ? undefined : message || 'Trường này phải là email';
//         }
//     };
// }

// Validator.minLength = function (selector, min, message) {
//     return {
//         selector: selector,
//         test: function (value) {
//             return value.length >= min ? undefined : message || `Nhập tối thiểu ${min} ký tự`;
//         }
//     };
// }

// Validator.isConfirmed = function (selector, getConfirmValue,message) {
//     return {
//         selector: selector,
//         test: function (value) {
//             return value === getConfirmValue() ? undefined: message || 'Giá trị nhập vào không chính xác';
//         }
//     }
// }
// //---------------------------------------------
