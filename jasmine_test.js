function removelast(arr) {
    arr.pop();
    return arr;
}
function removematch(arr, removeit) {
    for (var i in arr) {
        if (arr[i] == removeit) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
function add(arr, x) {
    arr.push(x);
    return arr;
}

function Node(value) {
    this.val = value;
    this.next = null;
}
function sll() {
    this.head = null;
    //Remove node from sll
    // O(n)
    this.removeNode = function(node) {
        var runner = head;
        if (head === node) {
            head = head.next
        }
        else {
            while (runner.next != null) {
                if (runner.next === node) {
                    runner.next = runner.next.next;
                }
                runner = runner.next
            }
            return runner;
        }
    };
    //Reverse sll
    //O(n)
    this.reverseSll = function(head) {
        if (!head || !head.next) {
            return head;
        }
        var previous;
        while (head.next != null) {
            var next = head.next;
            head.next = previous;
            previous = head;
            head = next;
        }
        head.next = previous;
        return head;
    }

    
    //Is there a loop in it
    //O(n)
    this.IsLoop = function(head) {
        if (!head) {
            return true;
        }
        else {
            var walker = head;
            while (head.next != null) {
                head = head.next.next;
                walker = head.next;
                if (head === walker) {
                    return true;
                }
            }
            return false;
        }
    }
}


