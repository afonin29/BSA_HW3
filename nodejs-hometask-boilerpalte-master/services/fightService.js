const { FightRepository } = require('../repositories/fightRepository');

class FightersService {
    findFights() {
        return FightRepository.getAll()
      }
    
      findFightById(id) {
        return this.search({ id })
      }
    
      deleteFight(id) {
        return FightRepository.delete(id)
      }
    }

module.exports = new FightersService();