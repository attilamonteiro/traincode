using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  public static List<int> MultipleOfIndex(List<int> xs)
  {
    return xs.Where((v, i) => i == 0 ? xs[0] == 0 : v % i == 0).ToList();
  }
}