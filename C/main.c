#include <stdio.h>
int main(void)
{
   int num1=0,cnt=1,sum=0;    // cnt는 카운트할 변수!!! 카운트 해서 sum이랑 나눠서 avg계산!!
   double avg=1;

   while (1<num1)   // 반복문은 num1이 1보다 크면 반복
   {
      printf("input :");
      scanf_s("%d", &num1);
      sum += num1;  // num1의 합계 sum에 저장
      if (num1 == 0);   // num1로 0이 입력돼면 break
      break;
      cnt++;    //cnt는 평균 구할 떄 나눌값!!
   }

   printf("sum : %d\navg : %.2f", sum,avg/cnt);

return 0;

}