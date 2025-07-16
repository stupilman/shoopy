import { useAuthContext } from '../context/AuthContext.jsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase.js';

function UseCart() {
  const { user } = useAuthContext();
  const uid = user?.uid;

  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ['carts', uid || ''],
    queryFn: () => getCart(uid),
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: (product) => addOrUpdateToCart(uid, product),
    onSuccess: async () => queryClient.invalidateQueries(['carts', uid]),
  });

  const removeItem = useMutation({
    mutationFn: (id) => removeFromCart(uid, id),
    onSuccess: async () => queryClient.invalidateQueries(['carts', uid]),
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}

export default UseCart;
