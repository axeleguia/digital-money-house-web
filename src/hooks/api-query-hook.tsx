import apiService from "@/services/api.service";
import { PostAccountDepositsRequestType } from "@/types/account-deposits.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export enum QueryKeys {
  ACCOUNT = "account",
  USER = "user",
  CARDS = "cards",
}

export const useGetQuery = <T,>(keys: QueryKeys) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<T>([keys]);
};

export const useGetAccount = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["account"],
    queryFn: async () => apiService.getAccount(),
    retryDelay: 3000,
  });
  return { data, isFetching };
};

export const useGetAccountUser = (user_id: number) => {
  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => apiService.getUser({ user_id }),
    enabled: !!user_id,
  });
  return { data, isFetching, isSuccess, refetch };
};

export const useGetAccountCards = (account_id: number) => {
  const { data, isFetching } = useQuery<GetAccountCardsResponseType[]>({
    queryKey: ["cards"],
    queryFn: async () => apiService.getAccountCards({ account_id }),
    enabled: !!account_id,
  });
  return { data, isFetching };
};

export const useUpdateAccountUser = (user_id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (variables: { key: string; value: any }) => {
      if (variables.key === "fullname") {
        const fullname = variables.value.split(" ");
        return await apiService.patchUser({
          id: user_id,
          firstname: fullname[0],
          lastname: fullname.slice(1).join(" "),
        });
      } else {
        return await apiService.patchUser({
          id: user_id,
          [variables.key]: variables.value,
        });
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
    },
  });
};

export const useCreateAccountCards = (
  account_id: number,
  cardRequest: PostAccountCardsRequestType
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      return await apiService.postAccountCards(account_id, cardRequest);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["cards"],
        (cards: GetAccountCardsResponseType[]) => [...cards, data]
      );
      toast.message("Tarjeta registrada");
    },
    onError: (e) => {
      toast.message("Ocurrio un problema al registrar la tarjeta");
    },
  });
};

export const useDeleteAccountCards = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (variables: { account_id: number; card_id: number }) => {
      return await apiService.deleteAccountCards(
        variables.account_id,
        variables.card_id
      );
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        ["cards"],
        (cards: GetAccountCardsResponseType[]) => {
          const filter = cards.filter((card) => card.id !== variables.card_id);
          const size = filter.length;
          if (size === 0) toast.message("No tienes tarjetas asociadas");
          return filter;
        }
      );
    },
  });
};

export const useCreateAccountDeposits = () => {
  return useMutation({
    mutationFn: async (variables: {
      account_id: number;
      depositRequest: PostAccountDepositsRequestType;
    }) => {
      return await apiService.postAccountDeposits(
        variables.account_id,
        variables.depositRequest
      );
    },
    onSuccess: () => {
      toast.message("Depósito registrado");
    },
    onError: (e) => {
      toast.message("Ocurrio un problema al registrar el depósito");
    },
  });
};

export const useGetAccountActivity = (account_id: number) => {
  const { data, isFetching } = useQuery({
    queryKey: ["activity"],
    queryFn: async () => apiService.getAccountActivity(account_id),
    enabled: !!account_id,
  });
  return { data, isFetching };
};
