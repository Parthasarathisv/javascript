function outerFunction(){
    let outervar=10

    function innerfunction(){
        let innervar=20;
        console.log('outervarible' +outervar)
        console.log('innervariable' +innervar)
    }
    innerfunction()
}
outerFunction()





