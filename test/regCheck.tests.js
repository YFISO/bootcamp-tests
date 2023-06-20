describe('Test my regCheck function' , function(){
    it('It should return "true" when called with "DC 55 YU GP", "GP"' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('It should return "false" when called with "DC 55 YU GP", "EC"' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('It should return "true" when called with "5566 L", "L"' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);;
    });

    it('It should return "false" when called with "5566 L", "M"' , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('It should return "true" when called with "ERT 123 EC", "EC"' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it('It should return "false" when called with "ERT 123 EC", "GP"' , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('It should return "true" when called with "FGT 123 MP", "MP"' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it('It should return "false" when called with "FGT 123 MM", "MP"' , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});