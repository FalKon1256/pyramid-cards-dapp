# Pyramid Project

## Introduction:
The consistent improvement of blockchain technology has inspired various innovative decentralized applications in different sectors such as online gaming and lottery. Our vision is to create a DApp that not only offers an exciting and rewarding user experience but also sets a new standard for transparency and fairness in the industry. We believe that users should have full rights to stay informed about the games they play and the platforms they engage with. 

Our Pyramid Cards aim to bring transparency and fairness to online card collection and lottery games by leveraging blockchain technology. The core mechanism of our DApp derives from the smart contracts that manage card distribution, ensuring that every card draw is verifiable, transparent, and consequently tamper-proof. For more details, please feel free to look at the White Paper of Pyramid Cards.

## Key features:
**• <ins>Transparent Odds:<ins>** Utilizing smart contracts, Pyramid Cards openly displays the probabilities of each card, ensuring that users are fully informed about their chances of winning or collecting rare cards, which helps to establish reasonable expectations and decisions.

**• Blockchain-Based Fairness:** The DApp relies on Chainlink’s Verifiable Random Function (VRF) to generate randomness for card draws. This guarantees the fairness of randomness and provides proof of integrity directly on the blockchain.

**• Rewarding Collection Mechanism:** Players can collect card sets to redeem prizes, including Ethereum tokens, which provide users with an incentive of ultimate reward beyond collection value.

**• Peer-to-peer Interaction Among Users:** Players have complete control over their collected items and can trade (in future versions) or redeem cards based on their strategies.

## Structure Design:

**• Tech Stack**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/571G_TechStack.jpeg)

**• Use Case Diagram**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/571G_ProjectUseCaseDiagram.jpeg)

**• UML Class Diagram**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/571G_ProjectClassDiagram.jpeg)


## Deployment
### Start From our existing contract
Step1. Use existed contract
```shell
nvm use 18
yarn
forge compile
yarn hardhat compile
```

Step2. Then enter frontend directory and run web app
```shell
cd frontend
nvm use 18
yarn
yarn start
```

### Start From Deploy Your Own Contract
Step1 Deploy your own contract on Sepolia
Remember to add .env file at the root directory
```shell
# ETHERSCAN_API_KEY=<ETHERSCAN_API_KEY>
SEPOLIA_API_URL = "Your SEPOLIA Provider API KEY"
SEPOLIA_PRIVATE_KEY = "Replace with your private key"
SUB_ID = "10299"
COR_ADDRESS = "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625"
GAS_LANE = "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c"
```

```shell
nvm use 18
yarn
yarn hardhat compile
yarn hardhat deploy --network sepolia
```
Copy&paste the logged on-chain address to the variable contractAddress in interact.tsx  
Add the logged address to your registered VRF account [VRFChainlink](https://vrf.chain.link/) to add it as a consumer to utilize the off-chain randomness function provided by Chainlink

Step2. Then enter frontend directory and run web app
```shell
cd frontend
nvm use 18
yarn
yarn start
```

## Interface Demo

**• User Login**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/1_user_login.png)

**• User Buy Draws**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/2_user_buy_draws.png)

**• User Draw Card**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/3_user_draw_card.png)
![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/3_user_draw_card_success.png)

**• User Redeem Draw**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/4_user_redeem_draw.png)
![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/4_user_redeem_draw_result.png)

**• User Redeem Award**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/5_user_redeem_award_owncards.png)
![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/5_user_redeem_award.png)
![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/5_user_redeem_award_success.png)

**• Admin Functions**

![pixel-style](https://raw.githubusercontent.com/FalKon1256/pyramid-cards-dapp/main/demo-images/6_admin_functions.png)

## Team Members
**Michael Yang, Zichen Chang, Kevin Chu, Zhiwei Li, Tai Jing**

## Notice
This Fork is added with project instructions and for further development of our original Repo, which can be found [here](https://github.com/Will-Li-zw/571G).



