const LOCAL_CONFIG_KEY = 'qiko-local-config';

const localConfig = {
  getConfig(): Promise<any> {
    const data: any = window.qiko.db.get(LOCAL_CONFIG_KEY) || {};
    return data.data;
  },

  setConfig(data) {
    const localConfig: any = window.qiko.db.get(LOCAL_CONFIG_KEY) || {};
    window.qiko.db.put({
      _id: LOCAL_CONFIG_KEY,
      _rev: localConfig._rev,
      data: {
        ...localConfig.data,
        ...data,
      },
    });
  },
};

export default localConfig;
