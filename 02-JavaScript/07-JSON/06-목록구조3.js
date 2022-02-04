/** 가장 일반적인 형태의 목록 구조 */
// 목록을 구성하는 배열 외에 목록을 설명하기 위한 부가 정보도 함께 포함
// 어떤 주제 데이터를 설명하기 위한 보조 데이터 --> [메타데이터] 라고 함
const bbs = {
    title: "공지사항",
    count: 4,
    item: [
        {id: 1, subject: '첫 번째 게시물 제목'},
        {id: 2, subject: '두 번째 게시물 제목'},
        {id: 3, subject: '세 번째 게시물 제목'},
        {id: 4, subject: '네 번째 게시물 제목'}
    ]
};

console.log("게시판 이름: " + bbs.title);
console.log("전체 게시물 수: " + bbs.count);


// 일반 for 문
console.group("일반 for문");
for (let i = 0; i < bbs.item.length; i++) {
    console.log("[" + bbs.item[i].id + "] " + bbs.item[i].subject);
}
console.groupEnd();


// for~of문
console.group("for~of문");
for (let k of bbs.item) {
    console.log("[" + k.id + "] " + k.subject);
}
console.groupEnd();
