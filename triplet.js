function Triplet(a1, a2, a3, n)
    {
        a1.sort(function(a, b){return a - b});
        a2.sort(function(a, b){return a - b});
        a3.sort(function(a, b){return a - b});
        let re_min = 0, re_max = 0, re_mid = 0;
        let i = 0, j = 0, k = 0;
        let diff = 3345;
           
        while (i < n && j < n && k < n)
        {
            let sum = a1[i] + a2[j] + a3[k];
            let max = maximum(a1[i], a2[j], a3[k]);
            let min = minimum(a1[i], a2[j], a3[k]);
            if (min == a1[i])
                i++;
            else if (min == a2[j])
                j++;
            else
                k++;
            if (diff > (max - min))
            {
                diff = max - min;
                re_max = max;
                re_mid = sum - (max + min);
                re_min = min;
            }
        }
        console.log(re_max + ", " + re_mid + ", " + re_min);
    }
    function minimum(p,q,r)
    {
        return Math.min(Math.min(p,q), r);
    }
     function maximum(p,q,r)
    {
        return Math.max(Math.max(p,q), r);
    }
    let a1 = [5, 2, 8];
    let a2 = [10, 7, 12];
    let a3 = [9, 14, 6];
    let n = a1.length;

    Triplet(a1, a2, a3, n);