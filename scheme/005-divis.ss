; Problem 5
((lambda (x)
   (let acc ((n x) (ls '()))
     (if (< n 1) (eval (cons 'lcm ls)) (acc (- n 1) (cons n ls)))))
 20)
