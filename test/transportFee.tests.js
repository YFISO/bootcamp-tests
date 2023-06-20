describe('Test my transportFee function' , function(){
    it('It should return "R20" when called with "morning"' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('It should return "R10" when called with "afternoon"' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('It should return "free" when called with "nightshift"' , function(){
        assert.equal(transportFee('nightshift'), 'free');
    });

});