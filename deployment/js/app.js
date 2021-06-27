const options = {
    task: 'regression' 
}

const nn = ml5.neuralNetwork(options)

const modelInfo = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin',
};

nn.load(modelInfo, modelLoadedCallback);

function modelLoadedCallback(){
    console.log('Model is succesfully loaded');

    document.getElementById('content').classList.remove('hidden')
    document.getElementById('loading').classList.add('hidden')
}

function calculateRisk(){
    let fbs_input
    let exng_input

    if(document.getElementById('fbs').checked == true){
        fbs_input = 1
    }else{
        fbs_input = 0
    }

    if(document.getElementById('exng').checked == true){
        exng_input = 1
    }else{
        exng_input = 0
    }

    const inputs = {
        age : Number(document.getElementById('age').value),
        sex: Number(document.getElementById('sex').value) ,
        cp: Number(document.getElementById('cp').value) ,
        trtbps : Number(document.getElementById('trtbps').value) ,
        chol: Number(document.getElementById('chol').value) ,
        fbs: fbs_input,
        restecg : Number(document.getElementById('restecg').value) ,
        thalachh :Number(document.getElementById('thalachh').value) ,
        exng : fbs_input ,
        ldpeak : Number(document.getElementById('oldpeak').value),
        slp : Number(document.getElementById('slp').value) ,
        caa: Number(document.getElementById('caa').value),
        thall : Number(document.getElementById('thall').value) 
   }

    nn.predict(inputs, (err,res)=>{
        document.getElementById('result').innerHTML = res[0].value + '%'
    })
}