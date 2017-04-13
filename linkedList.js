// work in progress

var linkedListBuilder = function(){
    "use strict";
    var NoSuchElementException = "NoSuchElementException";
    
    var nodeBuilder = function(value, previous, next) {
        var node = {
            value : value,
            previous : previous,
            next : next
        };
        return node;
    };
    
    var headSentinal = nodeBuilder(null, null, null);
    
    var pData = {
        head : headSentinal,
        tail : headSentinal
    };
    var linkedList = {};
    linkedList.add = function(value) {
        var node = nodeBuilder(value, pData.tail, null);
        pData.tail.next = node;
        pData.tail = node;
    };
    
    linkedList.iterator = function() {
        var itr = {};
        var current = pData.head;
        itr.hasNext = function() {
            return (current.next !== null);
        };
        itr.next = function() {
            current = current.next;
            return current.value;
        };
        return itr;
    };
    
    return linkedList;
};