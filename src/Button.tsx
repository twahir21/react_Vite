const Button = () => {

    // let counter: number = 0;

    // const handleClick = (name: string) => {
    //     if(counter < 3){
    //         counter++;
    //         console.log(`${name} clicked me ${counter} times`);
    //     }else{
    //         console.log('You have reached the maximum number of clicks');
    //     }
    // }


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement; // Type assertion to tell TypeScript it's a button
        target.textContent = "Ouch! 😢";
      };
      
  return (
    <div>
        {/* // if onClick event function has no callback function, handleClick just passed plain it will be called even if button is not clicked */}
        {/* like this <button onClick={handleClick}>Click me 😊</button> is wrong use below*/}

        <button onClick={(e) => handleClick(e)}>Click me 😊</button>
    </div>
  )
}

export default Button