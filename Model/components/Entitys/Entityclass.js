const url = "https://192.168.162.37:44335/api/";
class EntityClass {
  save = async () => {
    
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      
      },
      
      body: JSON.stringify(this), 
    });
    const responseTest = await response.json();
  };
}
export { EntityClass };
