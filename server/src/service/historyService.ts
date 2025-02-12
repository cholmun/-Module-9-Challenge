// TODO: Define a City class with name and id properties
class City {
  constructor(public name: string, public id: string) {}
}


// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async read(cities: City[]) {}
  private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities(): Promise<City[]> {
    const cities: City[] = [];
    return cities;
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file  
  async addCity(city: string) {
    const cities = await this.getCities();
    const id = Math.random().toString(36).substr(2, 9);
    cities.push(new City(city, id));
    await this.write(cities);

}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file 
  // not sure if this is correct???
  removeCity(city: string): void {
  try {
    const data = fs.readFileSync('searchHistory.json', 'utf8');
    const searchHistory = JSON.parse(data);
    const updatedHistory = searchHistory.filter((city) => city.name !== city);
    fs.writeFileSync('searchHistory.json', JSON.stringify(updatedHistory));
  } catch (error) {
    console.error(error);
  }
}
}

export default new HistoryService();
