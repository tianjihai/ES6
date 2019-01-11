/**
 * Created by  on 2019/1/9 0009.
 */


let p = new Promise((resolve, reject) => {
    //reject();
    console.log('---开始执行---')
    //做一些异步操作
    setTimeout(() => {
        console.log('执行完成');
        resolve('我是成功！！！');
    }, 2000);

});

p.then(console.log('第一个then'))
    .then(console.log('第二个then'))
    .then(console.log('第三个then'))
    .catch((err) => {
        console.log('rejected',err);
    })




var prp = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('建立连接')
        resolve('ok')
    }, 1000)
})
function post_sth(data){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('post网络请求,此时data='+data)
            resolve(data+'|post')
        }, 1000)
    })
}
function get_sth(data){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('get网络请求,此时data='+data)
            resolve(data+'|get')
        }, 1000)
    })
}

prp.then(post_sth).then(get_sth).then(post_sth).then(function(data){
    console.log('最后data='+data)
});