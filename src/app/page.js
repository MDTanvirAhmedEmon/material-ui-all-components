
import { Box, Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Container>
        <Button
          sx={{
            bgcolor: "red",
            px: 6,
            boxShadow: 'none',
            ":hover": {
              boxShadow: "none"
            }
          }}
          variant="contained">Contained</Button>
      </Container>
    </Box>
  );
}
