// work in progress

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

var linkedListBuilder = function(){
    "use strict";
    var head, tail;
    
    head = null;
    tail = null;
    var nodeBuilder = function(value, previous, next) {
        var node = {
            value : value,
            previous : previous,
            next : next
        };
        return node;
    };
    

    var linkedList = {};
    
    linkedList.add = function(value) {
        var node = nodeBuilder(value, null, null);
        if (tail === null)
        {
            tail = node;
            head = node;
        } else {
            var previousTail = tail;
            tail = node;
            previousTail.next = tail;
            tail.previous = previousTail;
        }
        return this;
    };
    
    linkedList.iterator = function() {
        var itr = {};
        var current = (head === null ? {next: null} : {next: head});
        itr.hasNext = function() {
            return (current.next !== null);
        };
        itr.remove = function() {
            if (current.previous === null)
            {
                assert(current === head);
                if (current.next === null)
                {
                    assert(current === tail);
                    //the list contains only this one element
                    head = null;
                    tail = null;
                    return true;
                }
                var next = current.next;
                next.previous = null;
                head = next;
                current = current.previous;
            } else if (current.next === null)
            {
                assert(current === tail);
                var previousNode = current.previous;
                previousNode.next = null;
                tail = previousNode;
                current = previousNode;
            } else {
                var previousNode = current.previous;
                var next = current.next;
                next.previous = previousNode;
                previousNode.next = next;
                current = previousNode
            }
        };
        itr.next = function() {
            current = current.next;
            return current.value;
        };
        return itr;
    };
    linkedList.forEach = function(consumerFunctional)
    {
        var itr = this.iterator();
        while (itr.hasNext())
            consumerFunctional(itr.next());
    }
    
    
    return linkedList;
};
