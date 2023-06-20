

describe('Test my YearsAgo function' , function(){
    it('It should return (new Date().getFullYear() - 1976) when called with "1976"' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976), "this should be true");
    });

    it('It should return (new Date().getFullYear() - 2000) when called with "2000"' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000), "this should be true");
    });


});