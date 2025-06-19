import { useEffect, useState, useRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/products/operations';
import {
  selectProducts,
  selectProductsLoading,
  selectProductsError,
} from '@/redux/products/selectors';
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CircularProgress,
  Alert,
  Box,
  Pagination,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
import { PageBackground } from '@/components/PageBackground/PageBackground';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const PAGE_SIZE = 8;

const TruncatedText = memo(({ text, variant, sx, lines = 1 }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const element = textRef.current;
      if (!element) return;

      setIsOverflowing(
        lines === 1
          ? element.scrollWidth > element.clientWidth
          : element.scrollHeight > element.clientHeight
      );
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [lines]);

  const textComponent = (
    <Typography
      ref={textRef}
      variant={variant}
      sx={{
        ...sx,
        ...(lines === 1
          ? {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }
          : {
              display: '-webkit-box',
              WebkitLineClamp: lines,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }),
      }}
    >
      {text}
    </Typography>
  );

  return isOverflowing ? (
    <Tooltip title={text} enterDelay={700}>
      {textComponent}
    </Tooltip>
  ) : (
    textComponent
  );
});

TruncatedText.displayName = 'TruncatedText';

export const Catalogue = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const pageCount = Math.ceil(products.length / PAGE_SIZE);
  const paginatedProducts = products.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  if (loading)
    return (
      <PageBackground>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: { xs: 8, sm: 9 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <CircularProgress size={60} />
        </Box>
      </PageBackground>
    );

  if (error)
    return (
      <PageBackground>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: { xs: 8, sm: 9 },
            px: 3,
            minHeight: '100vh',
          }}
        >
          <Alert severity="error">{error}</Alert>
        </Box>
      </PageBackground>
    );

  return (
    <PageBackground>
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          pt: { xs: 8, sm: 9 },
          pb: { xs: 4, sm: 6 },
          minHeight: '100vh',
        }}
      >
        <Box maxWidth="xl" mx="auto" px={3}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{
              mt: { xs: 4, sm: 6 },
            }}
          >
            {paginatedProducts.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card
                    sx={{
                      width: '280px',
                      height: 280,
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: 2,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        '& .hover-content': {
                          transform: 'translateY(0)',
                        },
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="280"
                      image={product.imageUrl}
                      alt={product.name}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />

                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(255, 255, 255, 0.98)',
                        height: '20%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 2,
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <TruncatedText
                        text={product.name}
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          fontSize: '0.95rem',
                          color: 'text.primary',
                          maxWidth: '70%',
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                        }}
                      >
                        ${product.price}
                      </Typography>
                    </Box>

                    <Box
                      className="hover-content"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(255, 255, 255, 0.98)',
                        height: '70%',
                        transform: 'translateY(100%)',
                        transition: 'transform 0.3s ease-in-out',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          p: 2,
                          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <TruncatedText
                          text={product.name}
                          variant="subtitle1"
                          lines={1}
                          sx={{
                            fontWeight: 500,
                            fontSize: '0.95rem',
                            color: 'text.primary',
                            maxWidth: '70%',
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            color: 'primary.main',
                          }}
                        >
                          ${product.price}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 2,
                          flex: 1,
                          p: 2,
                        }}
                      >
                        <TruncatedText
                          text={product.description}
                          variant="body2"
                          lines={5}
                          sx={{
                            color: 'text.secondary',
                            flex: 1,
                            lineHeight: 1.6,
                          }}
                        />
                        <IconButton
                          color="primary"
                          sx={{
                            bgcolor: 'rgba(0, 0, 0, 0.04)',
                            '&:hover': {
                              bgcolor: 'rgba(0, 0, 0, 0.08)',
                            },
                          }}
                        >
                          <ShoppingCartIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {pageCount > 1 && (
          <Stack alignItems="center" mt={4}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Stack>
        )}
      </Box>
    </PageBackground>
  );
};
