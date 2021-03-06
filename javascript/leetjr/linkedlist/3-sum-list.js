/*
Write a function, sumList, that takes in the head of a linked 
list containing numbers as an argument. The function should 
return the total sum of all values in the linked list.

test_00:

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19
test_01:

const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

sumList(x); // 42
test_02:

const z = new Node(100);

// 100

sumList(z); // 100
test_03:

sumList(null); // 0
*/

/* SOLUTION */
const sumList = (head) => {
	let sum = 0;
	let current = head;
	while (current !== null) {
		sum += current.val;
		current = current.next;
	}
	return sum;
};

/* EXPLANATION */
/*
Our function will take an argument: head and return the total sum 
of all values in the linked list. 

We begin by declaring a variable sum and set it equal to 0. We 
declare a variable current and set it equqal to head. 

We begin a while loop to run while current is not null. In the 
while loop we take the sum variable and add current.val to it. 
We set current to equal current.next. When current returns null, 
we exit the while loop and return sum. 
*/
