//동생작품

#include <iostream>

using namespace std;

char star[3072][6143];

void print(int row, int col){
    star[row][col] = '*';
    star[row+1][col-1] = '*';
    star[row+1][col+1] = '*';
    for (int x = -2; x < 3; x++)
        star[row+2][col+x] = '*';
}

void recursive(int N, int row, int col){
    if (N == 3){
        print(row, col);
        return;
    }
    recursive(N/2, row, col);
    recursive(N/2, row+N/2, col-N/2);
    recursive(N/2, row+N/2, col+N/2);
}

int main(){
    int N;
    cin >> N;
    for (int x = 0; x < N; x++){
        for (int y = 0; y < 2*N-1; y++){
            star[x][y] = ' ';
        }
    }
    recursive(N, 0, N-1);

    for (int x = 0; x < N; x++){
        for (int y = 0; y < 2*N-1; y++){
            cout << star[x][y];
        }
        cout << endl;
    }
    return 0;
}