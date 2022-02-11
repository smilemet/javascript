class Member {
    constructor(camp, name, hp, mp, dps) {
        this._camp = camp;
        this._name = name;
        this._hp = hp;
        this._mp = mp;
        this._dps = dps;
        console.log(
            `${this._camp} 진영 | ${this._name} | 체력 ${this._hp} | 마나 ${this._mp} | 공격력 ${this._dps} `)
    }

    move(position) {
        console.log(`${this._camp} 소속 ${this._name}(이)가 ${position}(으)로 이동했습니다.`);   
    }

    attack(target) {
        console.log(`${this._name}(이)가 ${target}(을)를 공격합니다. 데미지 ${this._dps}`)
    }
}


class 근딜 extends Member {
    melee(target) {
        console.log(` >>>>> 강타!!`);
        this.attack(target);
    }
}

class 원딜 extends Member {
    adCarry(target) {
        console.log(` >>>>> 연격!!`);
        this.attack(target);
    }
}

const Maemel = new 근딜('일산', 'ㅎㅎ', 99999, 99999, 99999);
Maemel.move('남양주');
Maemel.melee('ㅁㅁ');