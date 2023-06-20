describe('Test my totalPhoneBill function' , function(){
    it('It should return "R7.45" when called with "call, sms, call, sms, sms"' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'), "this should be true");
    });

    it('It should return "R3.40" when called with "call, sms"' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'), "this should be true");
    });

    it('It should return "R1.30" when called with "sms, sms"' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'), "this should be true");
    });


});