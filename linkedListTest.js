function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}


(function(){
    var linkedList = linkedListBuilder();
    linkedList.add(13);
    var itr = linkedList.iterator();
    var head = itr.next()
    assert(head === 13);
    console.log(head);
})();
(function(){
    var linkedList = linkedListBuilder();
    linkedList.add(13);
    var itr = linkedList.iterator();
    var head = itr.next()
    assert(itr.hasNext() === false);
})();
(function(){
    var linkedList = linkedListBuilder();
    linkedList.add(13);
    linkedList.add(7);
    linkedList.add(9);
    var itr = linkedList.iterator();
    assert(itr.next() === 13);
    assert(itr.next() === 7);
    assert(itr.next() === 9);
})();
(function(){
    var test;
    var linkedList = linkedListBuilder();
    var itr = linkedList.iterator();
    try{
        test = false;
        itr.next();
    }
    catch(e)
    {
        if (e instanceof TypeError)
            test = true;
    }
    assert(test);
    
})();