describe('Test my countAllFromTown function' , function(){
    it('It should return "3" when called with "CL 124,CY 567,CL 345, CJ 456,CL 341", "CL"' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3, "this should be true");
    });

    it('It should return "1" when called with "CJ 124,CY 567,CL 345, CF 456, CL 341", "CF"', function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1, "this should be true");
    })
});