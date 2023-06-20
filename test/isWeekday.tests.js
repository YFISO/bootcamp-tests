
describe('Test my isWeekday function' , function(){
    it('It should return "False" when called with "Saturday"' , function(){
        assert.equal(isWeekday('Saturday'), false, "this should be true");
    });

    it('It should return "false" when called with "Sunday"' , function(){
        assert.equal(isWeekday('Sunday'), false, "this should be true");
    });

    it('It should return "true" when called with "Monday"' , function(){
        assert.equal(isWeekday('Monday'), true, "this should be true");
    });

    it('It should return "true" when called with "Tuesday"' , function(){
        assert.equal(isWeekday('Tuesday'), true, "this should be true");
    });

    it('It should return "true" when called with "Wednesday"' , function(){
        assert.equal(isWeekday('Wednesday'), true, "this should be true");
    });

    it('It should return "true" when called with "Thursday"' , function(){
        assert.equal(isWeekday('Thursday'), true, "this should be true");
    });

    it('It should return "true" when called with "Friday"' , function(){
        assert.equal(isWeekday('Friday'), true, "this should be true");
    });


});