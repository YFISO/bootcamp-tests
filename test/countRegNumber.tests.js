describe('Test my countRegNumber function' , function(){
    it('It should return "3" when called with "CA 182736,CY 523519,CJ 812328"' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
        assert.equal(regCount, 3);
    });

    it('It should return "1" when called with "CA 182736"' , function(){
        var regCount = countRegNumber('CA 182736');
        assert.equal(regCount, 1);
    });

});