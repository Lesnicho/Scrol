class SimpleMembersship{
    constructor(name){
        this.name = name
        this.cost = 50
    }
}

class StandardMembersship{
    constructor(name){
        this.name = name
        this.cost = 150
    }

}class PremiumMembersship{
    constructor(name){
        this.name = name
        this.cost = 550
    }
}

class MemberFactory{
    static list = {
       simple: SimpleMembersship,
       standart: StandardMembersship,
       premium: PremiumMembersship
    }

    create(name, type = 'sinple'){
        const Membersship = MemberFactory.list[type] || MemberFactory.list.simple

        const member = new Membersship(name)
        member.type = type
        member.define = function(){
            console.log( `${this.name} (${this.type}): ${this.cost} `)
        }
        return member 
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Vladislav','simple') ,
    factory.create('God','premium') ,
    factory.create('Leana','standard')
]

console.log(members)
