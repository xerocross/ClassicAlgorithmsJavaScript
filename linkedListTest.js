describe("LinkedList", function() {
        var linkedList;
        beforeEach(function() {
            linkedList = linkedListBuilder();
        });
    it("add method is defined", function() {
        var addThrowsError = false;
        try {
            linkedList.add(13);
        } catch(e)
        {
            addThrowsError = true;
        }
        expect(addThrowsError).toBeFalsy();
    });

});
describe("LinkedList :: iterator", function() {
    var linkedList;
    beforeEach(function() {
        linkedList = linkedListBuilder();
    });
    
    
    it("should return added elements when iterator.next()is called", function() {
        linkedList.add(13);
        linkedList.add(7);
        linkedList.add(3);
        var itr = linkedList.iterator();
        var r1, r2, r3;
        r1 = itr.next();
        r2 = itr.next();
        r3 = itr.next();
        expect(r1).toEqual(13);
    });
    

    it("should return false if no elements added and iterator.hasNext() called",function() {
        var itr = linkedList.iterator();
        var hasnext = itr.hasNext();
        expect(hasnext).toBe(false);
    });
    it("should return true if element added and hasNext() called ",function() {
        linkedList.add(13);
        var itr = linkedList.iterator();
        expect(itr.hasNext()).toBe(true);
    });
    it("should throw an error if next() is called and there is no next", function() {
        var throwsError = false;
        var itr = linkedList.iterator();
        try{
            test = false;
            itr.next();
        }
        catch(e)
        {
            if (e instanceof TypeError)
                throwsError = true;
        }
        expect(throwsError).toBe(true);
    });
    it("should loop over all elements when you call .forEach(consumerFunctional)", function(){
        linkedList.add(5).add(12).add(7);
        var testNum = 0;
        linkedList.forEach(x=>{testNum+=x;});
        expect(testNum).toEqual(24);
    });
    it("should remove the element just pulled when we call iterator.remove if in the middle",function(){
        linkedList.add(5).add(12).add(7);
        var itr = linkedList.iterator();
        itr.next();
        itr.next();
        itr.remove();
        itr = linkedList.iterator();
        expect(itr.next()).toEqual(5);
        expect(itr.next()).toEqual(7);
    });
    it("should remove the element just pulled when we call iterator.remove if it is the head",function(){
        linkedList.add(5).add(7);
        var itr = linkedList.iterator();
        itr.next();
        itr.remove();
        itr = linkedList.iterator();
        expect(itr.next()).toEqual(7);
        expect(itr.hasNext()).toBe(false);
    });
    it("should remove the element just pulled when we call iterator.remove if it is the tail",function(){
        linkedList.add(5).add(7);
        var itr = linkedList.iterator();
        itr.next();
        itr.next();
        itr.remove();
        itr = linkedList.iterator();
        expect(itr.next()).toEqual(5);
        expect(itr.hasNext()).toBe(false);
    });
         
});
