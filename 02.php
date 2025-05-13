<?php
declare(strict_types=1);

$greet = function (int $x): int {
    return $x * $x;
};

class Foo
{
    static function math2(int $x)
    {
        return $x * $x;
    }

    public function doStuff(callable $cb)
    {
        return $cb(2);
    }
}

$instance = new Foo();
echo $instance->doStuff($greet);
echo $instance->doStuff(['Foo', 'math2']);

//echo math(2)

?>

