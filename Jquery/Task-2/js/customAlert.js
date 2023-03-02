const alertBox = 
    `
    <div class="alert-body hide fadein">
        <div class="alert-box">
        <p>You have reached your limit!</p>
        <button onclick="stopConfirm()" class="btn btn-outline-danger">OK</button>
        </div>
    </div>`
var flag = 0;

const injectBox = ()=>{
    $('body').append(alertBox);
} 

const showConfirm = ()=>{
    $('.alert-body').fadeIn();
    flag = 1;
    return new Promise((resolve,reject)=>{
        checkFlag(resolve,reject);
    });
}

const checkFlag = (resolve,reject)=>{
    setTimeout(()=>{
        if(!flag){
            flag = 0;
            resolve();
        }
        else{
            checkFlag(resolve,reject);
        }
    },500);
}

const stopConfirm = ()=>{
    $('.alert-body').fadeOut();
    flag = 0;
}

$(document).ready(()=>{
    injectBox();
})