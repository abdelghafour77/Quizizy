<?php
$arr = ['he', 'home', 'ask', 'home', 'zero', 'banana', 'ask'];
var_dump($arr);
sort($arr);
var_dump($arr);
$r =  array_fill(0, count($arr), 0);
foreach ($arr as $k => $a) {
  foreach ($arr as $p => $b) {
    if ($a == $b && !isset($r[$k])) {
      $r[$k] += 1;
    } elseif ($a == $b) {
      $r[$k] += 1;
      unset($arr[$p]);
    }
  }
}
// array_diff($r, [0]);
var_dump($r);

foreach ($r as $p) {
  if ($p != 0) {
    echo $p;
  }
}









// $re = [];
// foreach ($arr as $a) {
//   $re[$a] = 1;
// }

// var_dump($re);
// ksort($re, SORT_STRING);
// var_dump($re);
