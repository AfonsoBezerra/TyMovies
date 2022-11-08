import { database } from '../firebase/admin';

type Response<T> = T & { id: string };

type GetOption = {
  onlyId: boolean;
};

interface Database {
  in: (path: string) => {
    add: <T>(obj: T, insidePath?: string) => Promise<Response<T>>;
    get: <T, U extends string | undefined>(
      id: U,
      option?: GetOption,
    ) => U extends string
      ? Promise<Response<T> | null>
      : Promise<Response<T>[]>;
    put: <T>(id: string, data: T) => Promise<Response<T>>;
    del: (id: string) => Promise<any>;
  };
}

export const db: Database = {
  in: (path) => {
    const collection = database.collection(path);

    return {
      add: async (obj, insidePath) => {
        if (insidePath) {
          const res = await collection.doc(insidePath).set(obj as any);
          return { res, data: obj };
        }
        const res = await collection.add(obj as any);
        return { id: res.id, ...((await res.get()).data() as any) };
      },
      get: async (id, option) => {
        if (id) {
          const res = await collection.doc(id).get();
          if (!res.exists) return null;
          return option?.onlyId
            ? res.id
            : { id: res.id, ...(res.data() as any) };
        }
        const data = await collection.get();
        return data.docs.map((doc) =>
          option?.onlyId ? doc.id : { id: doc.id, ...(doc.data() as any) },
        );
      },
      put: async (id, data) => {
        const doc = collection.doc(id);
        await doc.update(data as any).catch((err) => {
          if (err.code === 5) doc.set(data as any);
        });

        return { id, ...(data as any) };
      },
      del: async (id) => {
        const res = await collection
          .doc(id)
          .delete()
          .then(() => {
            collection
              .doc(id)
              .listCollections()
              .then((listColl) => {
                listColl.forEach((coll) => {
                  coll.listDocuments().then((listDocs) => {
                    listDocs.forEach((doc) => {
                      doc.delete();
                    });
                  });
                });
              });
          });

        return res;
      },
    };
  },
};
