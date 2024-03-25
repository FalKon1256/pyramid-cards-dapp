// AccountInformation.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Card, CardContent, CardMedia, Grid, CircularProgress, Button } from '@mui/material';
import { RootState } from '../store/store';
import { redeemCard } from '../store/interact';
import { setCollection, setRemainingDraws } from '../store/userSlice';

const AccountInformation = () => {
  const { remainingDraws, collection } = useSelector((state: RootState) => state.user);
  const cardImageMap = useSelector((state: RootState) => state.cardImageMap);
  const account = useSelector((state: RootState) => state.user.address);
  const dispatch = useDispatch();
  const userCollection = useSelector((state: RootState) => state.user.collection);

  const handleCardButtonClick = async(cardId: number) => {
    // This function will be called when the button under a card is clicked.
    // You can replace the alert with any other functionality you need.
    try {

      const respond = await redeemCard(cardId)
      console.log("Function ID",cardId)
      dispatch(setRemainingDraws(remainingDraws + 1));
      // dispatch()

      const newCollection = userCollection.map((card, index) => {
        console.log(cardId, index, "Does it match")
        if (card.id === cardId) {
          return { ...card, quantity: card.quantity - 4 };
        }
        return card;
      });
      console.log(newCollection)
      dispatch(setCollection(newCollection));
    } catch (error) {
      alert("Redeem Failed")
    }
  };

  if (account === null || collection === null) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2} padding={2} alignItems="flex-start">
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Draw Times Remaining: {remainingDraws}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          My Collection
        </Typography>
        <Grid container spacing={2}>
          {collection.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={cardImageMap[card.id] || 'https://via.placeholder.com/150'}
                  alt={`Card ${card.id}`}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="center">
                    {`Card ${card.id} (x${card.quantity})`}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleCardButtonClick(card.id)}
                    style={{marginTop: '10px'}}
                  >
                    Redeem
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AccountInformation;