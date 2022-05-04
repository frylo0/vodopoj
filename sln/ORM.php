<?php
class ORM {
   var $db;
   var $host;
   var $user;
   var $pass;
   var $db_name;

   var $is_log = false;
   var $last_operation = null;
   var $last_operation_args = null;

   var $table_prefix = '';
   var $conditions;
   var $selector;
   var $table;

   function __construct($host, $user, $pass, $db_name)
   {
      $this->host = $host;
      $this->user = $user;
      $this->pass = $pass;
      $this->db_name = $db_name;

      $this->db = new mysqli($this->host, $this->user, $this->pass, $this->db_name);

      if ($this->db->connect_error) {
         die('Ошибка подключения (' . $this->db->connect_errno . ') '
            . $this->db->connect_error);
      }

      $this->conditions = '';
   }

   // CONFIG
   function __clone() {
      $new_orm = new ORM($this->host, $this->user, $this->pass, $this->db_name);

      $new_orm->is_log = $this->is_log;

      $new_orm->table_prefix = $this->table_prefix;
      $new_orm->conditions = $this->conditions;
      $new_orm->selector = $this->selector;
      $new_orm->table = $this->table;

      return $new_orm;
   }

   function from($table) {
      $this->table = $this->table_prefix . $table;
      return $this;
   }

   function where($conditions) {
      $this->conditions = $conditions;
      return $this;
   }

   function close() {
      $this->db->close();
   }


   // QUERY TO DB
   function __invoke($fetch_type = MYSQLI_ASSOC)
   {
      $where_str = $this->gen_conditions_string();
      $sql = '';
      $assoc = $this->last_operation_args;

      switch ($this->last_operation) {
         case 'select':
            $sql = "SELECT {$this->selector} FROM {$this->table} WHERE {$where_str};";
            break;

         case 'update':
            $query_str = '';

            foreach ($assoc as $key => $val) {
               $val = $this->get_val($val);
               $query_str .= "$key = $val, ";
            }
            $query_str = mb_substr($query_str, 0, mb_strlen($query_str) - 2);

            $sql = "UPDATE {$this->table} SET {$query_str} WHERE {$where_str};";
            break;

         case 'insert':
            $keys = array_keys($assoc);
            $vals = array_values($assoc);

            $keys_str = '`' . implode('`, `', $keys) . '`';
            $vals_str = '';
            foreach ($vals as $val) {
               $val = $this->get_val($val);
               $vals_str .= "'$val', ";
            }
            $vals_str = mb_substr($vals_str, 0, mb_strlen($vals_str) - 2);

            $sql = "INSERT INTO {$this->table} ({$keys_str}) VALUES ({$vals_str});";
            break;

         default;
      };
      
      return $this->query($sql, $fetch_type);
   }

   function take($fetch_type = MYSQLI_ASSOC) {
      return $this->__invoke($fetch_type);
   }


   // Operations
   function select($selector)
   {
      $this->last_operation = 'select';
      $this->selector = $selector;
      return $this;
   }
   function update($assoc)
   {
      $this->last_operation = 'update';
      $this->last_operation_args = $assoc;
      return $this;
   }
   function insert($assoc)
   {
      $this->last_operation = 'insert';
      $this->last_operation_args = $assoc;
      return $this;
   }


   // Private
   private function query($sql, $fetch_type = null)
   {
      if ($this->is_log)
         $this->console_log('ORM SQL: ' . $sql . ' ; fetch_type: ' . $fetch_type);
      $res = $this->db->query($sql);
      if ($fetch_type && !is_bool($res))
         return $res->fetch_all($fetch_type);
      else
         return $res;
   }

   private function gen_conditions_string()
   {
      return $this->conditions ? $this->conditions : '1';
   }

   private function console_log($message)
   {
      if ($this->is_log) {
         echo "<script>console.log(`$message`);</script>";
      }
   }

   private function get_val($val) {
      if (is_string($val)) {
         return "'$val'";
      } else {
         if ($val === null) return 'NULL';
         return $val;
      }
   }
}