// work in progress

var linkedListBuilder = function(){
    var NoSuchElementException = "NoSuchElementException"
    
    var nodeBuilder = function(value, previous, next) {
        var node = {
            value : value,
            previous : previous,
            next : next
        };
        return node;
    };
    
    var headSentinal = nodeBuilder(null, null, null);
    
    var private = {
        head : headSentinal,
        tail : headSentinal
    };
    var linkedList = {};
    linkedList.add = function(value) {
        var node = nodeBuilder(value, private.tail, null);
        private.tail.next = node;
        private.tail = node;
    };
    
    linkedList.iterator = function(){
        var itr = {};
        var current = private.head;
        itr.hasNext = function(){
            return (current.next !== null)
        }
        itr.next = function(){
            current = current.next;
            return current.value;
        }
        return itr;
    }
    
    return linkedList;
};