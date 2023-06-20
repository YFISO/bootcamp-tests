describe('Test my isFromBellville function' , function(){
    it('It should return "true" when called with "CY 123"' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('It should return "false" when called with "CJ 123"' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
});